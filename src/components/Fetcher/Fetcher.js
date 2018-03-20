import React from "react";
import Axios from "axios";
import UserInfo from "../UserInfo/UserInfo.js";




class Fetcher extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				UserInformation: [],
				error: false
			};
	}

		componentDidMount() {
			Axios.get(`https://www.wanikani.com/api/user/bfe2a551fdc7805d03c0c615f7b220ec/user-information`)
				.then(response => {
					console.log(response.data);
					console.log(response.status);
				})
				.catch(error => {
					console.log(error);
					this.setState({
						error: true
					});
				});
			}	


		render() {
			return (
				<ul>
    			{this.state.UserInformation.map(parser => <UserInfo userinformation={parser.user_information}/>)}
				</ul>
      );
    }
	} 



export default Fetcher;
