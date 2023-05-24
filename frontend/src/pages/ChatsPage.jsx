import {MultiChatSocket , MultiChatWindow , useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic('39505e1e-c8fe-4b4a-9389-4018ee9990f7' , props.user.username , props.user.secret)

    return(
        <div style={{height: "100vh"}}>

            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: "100%"}}/>

        </div>
    );
}

export default ChatsPage;