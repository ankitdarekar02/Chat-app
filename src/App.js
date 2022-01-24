import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/chatFeed';
import LoginForm from './components/loginForm';

const App = () => {
	if(!localStorage.getItem('username')) return (<LoginForm/>)
    // return (
	// 	<ChatEngine
	// 		height='100vh'
	// 		userName='ankit'
	// 		userSecret='123123'
	// 		projectID='cb487c5f-2c09-401d-89b8-a5d6d9a9fcb3'
    //         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
	// 	/>
	// );
    return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='cb487c5f-2c09-401d-89b8-a5d6d9a9fcb3'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}; 

export default App;

