const TheirMessage = ({lastMessage, message}) => {
    const isFirsMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    
    return (
        <div className="message-row">
            {isFirsMessageByUser && (
                <div className="message-avatar" style={{backgroundImage: `url(${message?.sender?.avatar})`}}/>
            )}
             {message?.attachments?.length > 0 ? 
            (
                <div>
                    <img src={message.attachments[0].file} 
                    alt="message-attachment" 
                    className="message-image"
                    style={{marginLeft: isFirsMessageByUser ? '4px' : '48px'}}/>
                </div>
            ) : (
                <div className="message" style={{float: 'left', backgroundColor : '#CABCDC'}}>
                    {message.text}
                </div>
            )
            }
        </div> 
    )
}
 
export default TheirMessage;

