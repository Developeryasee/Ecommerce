import React, { memo, useEffect } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Fonts, globalstyle } from "../../Themes";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./style";
import Qr from '../../Assets/NewIcons/Qrscan.svg';
import Chat from '../../Assets/NewIcons/Chat.svg';
import Notify from '../../Assets/NewIcons/Notify.svg';
import BackArrow from '../../Assets/NewIcons/BackArrow.svg';
import PrivateChatIcon from '../../Assets/NewIcons/PrivateChatIcon.svg';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { selectAllWaiting } from "../../ReduxSlice/eventhomeslices";
import { StreamChat } from "stream-chat";
import api from "../../Services/api";
function CustomHeader({ navigation, name, forChat, ChatUserImage, uname }) {
    const { profileImage } = useSelector((state) => state.event);
    const { senderinfo, chatToken, unreadCount, isPrivateMsg, eventTicket } = useSelector((state) => state.chat)
    const chatClient = StreamChat.getInstance('qb44rshmg4ch');
    const dispatch = useDispatch();
    const eventHomeData = useSelector(selectAllWaiting);
    const { BottomBarHeader,from,sessionFrom} = useSelector((state) => state.header);
    const OPEN = () => {
        navigation.navigate('profile')
    }
    useEffect(() => {
        getPrivateToggle();
    }, [])
    const userImage = (bool) => (


        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                borderRadius: 38,
                backgroundColor: '#E1FDFF',
                borderWidth: 3, justifyContent: 'center', alignItems: 'center',
                borderColor: '#fff'
            }}
            onPress={() => {
                OPEN();
            }}
        >
            {
                profileImage != "" ? <>
                    <Image
                        source={{ uri: profileImage }}
                        style={styles.userImage}
                    />
                </> : renderNoImage(eventHomeData[0].profileinfo.firstname[0],eventHomeData[0].profileinfo.lastname[0])
            }

        </TouchableOpacity>


    )
    const Back = async() => {

        if (name === "PollsAnswer") {
            
            if (sessionFrom==="session") {
                dispatch({type:'sessionFrom',payload:''})
                navigation.navigate('AgendaList')
            }else{
                navigation.navigate('PollsList');
            } 
        }
        else if (name==='Polls') {
            if (sessionFrom==="session") {
                dispatch({type:'sessionFrom',payload:''})
                navigation.navigate('Agenda')
            }else{
                navigation.goBack();
            }  
        }
        else if (name==='PollQues') {
            if (sessionFrom==="session") {
                dispatch({type:'sessionFrom',payload:''})
                navigation.navigate('AgendaList')
            }else{
                navigation.goBack();
            }  
        }
        else {
            if (name === "My Conversations") {
                if (!chatClient.userID) {

                    await chatClient.connectUser(senderinfo,chatToken);
    
                }
                getUnreadCount(senderinfo.id)
                navigation.goBack();
                if (BottomBarHeader===true) {
                    
                    dispatch({ type: 'BottomBarHeader', payload: true });
                }else{
                    dispatch({ type: 'BottomBarHeader', payload: false});
    
                    }
            }
            else if (name==="Edit Profile") {
                navigation.goBack();
                if (BottomBarHeader===true) {
                    
                dispatch({ type: 'BottomBarHeader', payload: true });
            }else{
                dispatch({ type: 'BottomBarHeader', payload: false});

                }
                
            }
            else  if (name==="Notifications") {
                navigation.goBack();
                dispatch({ type: 'BottomBarHeader', payload: false });
            }
            else if (name==="SpeakerDetail") {
                if (from==="home") {
                    dispatch({type:'from',payload:''})
                    navigation.navigate('Home')
                    dispatch({ type: 'BottomBarHeader', payload: true });
                }else{
                    navigation.goBack();
                }
                
            }
            else if (name==="SponsorsDetail") {
                if (from==="home") {
                    dispatch({type:'from',payload:''})
                    navigation.navigate('Home')
                    dispatch({ type: 'BottomBarHeader', payload: true });
                }else{
                    navigation.goBack();
                }
            }
            else{
                navigation.goBack();

            }
        }
    }

    const createChannel = async () => {
        const newChannel = chatClient.channel('livestream', "Event-1234");
        await newChannel.watch({ watchers: { limit: 500 } });
        // chatClient.connectUser(senderinfo,chatToken)
    }
    const renderNoImageForChat = (name) => {
        if (name!="") {
            const result = name.trim().split(/\s+/);
        return (
            <Text style={[Fonts.SIZES.h5, Fonts.COLORS.dgreen,{fontSize:19}]}>{(result[0][0]).toUpperCase()}{result[1]!=undefined?(result[1][0]).toUpperCase():""}</Text>
        )
        
    }
}
    const renderNoImage = (fn,ln) => {
        return (
            <Text style={[Fonts.SIZES.h5, Fonts.COLORS.dgreen,{fontSize:17}]}>{fn.toUpperCase()}{ln.toUpperCase()}</Text>
        )
        
    }
    const getUnreadCount = async (userid) => {
        const filter = { type: 'messaging', members: { $in: [userid] } };
        const sort = [{ unread_count: 1 }];
        var sum = 0;
        try {
            const channels = await chatClient.queryChannels(filter, sort, {
                watch: true, // this is the default
                state: true,
            });
            channels.map((channel) => {
                // console.log(">>>>>>>>>>>>>>>>channel.data.name", channel.countUnread())
                sum = sum + channel.countUnread();
            })
            // setchatcount(sum)
            dispatch({ type: 'unreadCount', payload: sum })
        } catch (ex) {
            console.log(">>>>>>>>>>>>>>>>channel.data.name error", ex)
        }
        // chatClient.queryUsers({ id: userid })
        // .then((user) => console.log(user))

        
    }
    const getPrivateToggle = async () => {
        try {

            let res = await api.getPrivateMessage();
            if (res.data.status) {
                dispatch({ type: "isPrivateMsg", payload: true })
            }
            else {
                dispatch({ type: "isPrivateMsg", payload: false })

            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>

            {
                forChat ? <>
                    <View style={{ width: '100%', backgroundColor: '#F8FCFF', paddingLeft: 20, paddingRight: 20, paddingTop: 30, paddingBottom: 30, flexDirection: 'row' }}>
                        <TouchableBounce style={[styles.BackContainer]}
                            onPress={Back}
                        >
                            <BackArrow width={20} height={20} fill={'#000'} />

                        </TouchableBounce>
                        <View style={{ alignSelf: 'center', flex: 1, alignItems: 'center', marginRight: 36 }}>
                            <View style={{ width: 72, height: 72, backgroundColor: '#E1FDFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                {
                                    ChatUserImage != "" && ChatUserImage != null && ChatUserImage != undefined ? <>
                                        <Image
                                            source={{ uri: ChatUserImage }}
                                            style={{ width: '100%', height: '100%', borderRadius: 10, resizeMode: 'cover' }}
                                        />
                                    </> : renderNoImageForChat(name)
                                }
                            </View>
                            <Text style={[Fonts.SIZES.h3, Fonts.COLORS.black, globalstyle.mt10]}>{name}</Text>
                        </View>

                    </View>
                </> :
                    <View style={styles.headerContainer}>
                        <View style={styles.innerContentView}>
                            <View style={[styles.leftContainer, BottomBarHeader ? null : name != "Rate and review" && name != "Edit Profile" && name != "My Conversations" && name != "Notifications" && name != "Contact organizer"&&name!='home'&&name!='BroadCastScreen' ? styles.flexContainer : null]}>
                                {
                                    BottomBarHeader&&name!='Notifications' ?
                                        <>
                                            {
                                                userImage(false)
                                            }
                                        </> : name==='home'?<>
                                        {
                                                userImage(false)
                                            }
                                        </>:null
                                }
                                {name === "Agenda" || name === "home" || name === "People" || name === "Explore" || name === "Speakers" || name === "Sponsors" || name === "Polls" || name === "Venue" ?
                                    <>
                                        {
                                            name === "home" ? <Text style={[Fonts.SIZES.h7, Fonts.COLORS.black, BottomBarHeader ? styles.headerTitle : styles.headerTitle ]} numberOfLines={1} ellipsizeMode="tail">{(((eventHomeData[0].profileinfo.firstname + " " + eventHomeData[0].profileinfo.lastname).length) > 15) ?
                                                (((eventHomeData[0].profileinfo.firstname + " " + eventHomeData[0].profileinfo.lastname).substring(0, 15 - 3)) + '...') :
                                                eventHomeData[0].profileinfo.firstname + " " + eventHomeData[0].profileinfo.lastname}</Text> : <Text style={[Fonts.SIZES.h3, Fonts.COLORS.black, BottomBarHeader ? styles.headerTitle : null]}>{name}</Text>
                                        }

                                    </>

                                    : <TouchableBounce style={[styles.BackContainer]}
                                        onPress={Back}
                                    >
                                        <BackArrow width={20} height={20} fill={'#000'} />

                                    </TouchableBounce>
                                }
                                {
                                   ( name === "Rate and review" || name === "Edit Profile" || name === "My Conversations" || name === "Notifications" || name === "Contact organizer")&&name!="BroadCastScreen" ? <>
                                        <Text style={[Fonts.SIZES.h3, Fonts.COLORS.black, BottomBarHeader ? styles.headerTitle : null, { marginLeft: 10 }]} numberOfLines={1}>{name}</Text>

                                    </> : null
                                }
                            </View>
                            {
                                name === "Rate and review" || name === "Edit Profile" || name === "My Conversations" || name === "Notifications" || name === "Contact organizer" ||name==="BroadCastScreen"? null :
                                    <View style={styles.rightContainer}>
                                        {
                                            !BottomBarHeader&&name!='home' ?
                                                <View style={{marginLeft:20}}>
                                                    {
                                                        userImage(true)
                                                    }
                                                </View> : null
                                        }
                                        {
                                            eventTicket.length != 0 ? <>
                                                <TouchableBounce style={[styles.IconContainer,{marginLeft:25}]}
                                                    onPress={() => {
                                                        navigation.navigate('TicketPopup')
                                                    }}
                                                >
                                                    <Qr width={20} height={20} fill={'#000'} />
                                                </TouchableBounce>
                                            </> : null
                                        }

                                        {/* <TouchableBounce style={[styles.IconContainer, styles.right]}
                                           onPress={createChannel}
                                    >
                                        <Chat width={20} height={20} fill={'#000'} />

                                    </TouchableBounce> */}
                                        <TouchableBounce style={[styles.IconContainer,]}
                                            onPress={() => {
                                                // dispatch({ type: 'BottomBarHeader', payload: false });
                                                navigation.navigate('pnotify')
                                            }}
                                        >
                                            <Notify width={22} height={22} fill={'#000'} />

                                        </TouchableBounce>
                                        {
                                            eventHomeData[0].menus.map((item,index)=>(
                                                <View key={index}>
                                                {
                                                   
                                                    item.id==="privatemsg"&&item.isvisible?<>
                                                     {
                                            isPrivateMsg ? <>

                                                <TouchableBounce style={[styles.IconContainer,{marginRight:25}]}

                                                    onPress={() => {
                                                        dispatch({ type: 'BottomBarHeader', payload: false });
                                                        navigation.navigate('PrivateChat', { receiverinfo: null, eventid: eventHomeData[0].eventid })
                                                    }}
                                                >
                                                    <PrivateChatIcon width={20} height={20} fill={'#000'} />
                                                    {/* <Text style={[Fonts.SIZES.h3, Fonts.COLORS.black]}>C</Text> */}
                                                    {
                                                        unreadCount != 0 ? <View style={{ width: 18, height: 18, backgroundColor: '#FB6767', top:-6,right:-6, position: 'absolute',  borderRadius: 12,justifyContent:'center',alignItems:'center' }}>
                                                                <Text style={[Fonts.SIZES.h10,Fonts.COLORS.white,{fontSize:11}]}>{unreadCount}</Text>
                                                        </View> : null
                                                    }

                                                </TouchableBounce>
                                            </> : null
                                        }
                                                    </>
                                                  
                                                    :null
                                                }
                                                </View>
                                            ))
                                        }
                                        

                                    </View>
                            }

                        </View>
                    </View>
            }
        </>

    )
}
export default memo(CustomHeader)