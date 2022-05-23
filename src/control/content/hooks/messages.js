
const useMessages = () => {
    const handleSendMessage = (values) => {
        buildfire.messaging.sendMessageToWidget(values);
    };
    return {
        handleSendMessage
    };
};

export default useMessages;