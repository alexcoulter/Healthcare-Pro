import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { DialogActions } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import LocalDoctorProfile from "../../pages/DoctorProf/LocalDoctorProfile";
import LocalPatientProfile from "../../pages/PatientProf/LocalPatientProfile";
import getAvatarInitials from "../../helpers/getAvatarInitials";
import getRandomMaterialColor from "../../helpers/getRandomMaterialColor";
const TokenGenerator = require('uuid-token-generator');

const token = TokenGenerator().generate();

class ProfileActions extends React.Component {
    constructor(props) {       
        super(props);

         this.state = {
             anchorEL:null,
             openProfile:false
            };
            
        }
         this.componentDidMount() {
             this.props.auth.getUserData(this.props.auth.user.id)
         }

         this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
         this.handleProfileMenuClose = this.handleProfileMenuClose.bind(this);
         this.closeProfile = this.closeProfile.bind(this);
         this.handleSend = this.handleSend.bind(this);
         this.transition = this.transition.bind(this);
         this.dialogClose = this.dialogClose.bind(this);
         this.dialogOpen = this.dialogOpen.bind(this);
         this.dialogCopy = this.dialogCopy.bind(this);

         handleProfileMenuOpen = (event) => {
            this.setState({
                anchorEl:event.currentTarget
            })
         }

         handleProfileMenuClose = () => {
            this.setState({
                anchorEl:null
            })
         }

         closeProfile = () => {
            this.setState({
                openProfile:false
            })
         }

         handleSend = () => {
             let id = this.props.auth.user.id;
             this.props.setToken(token, id);
             this.setState({
                 open:false
             })
         }

          dialogCopy = () => {
              this.setState({
                  open:false
              })
          }

          dialogOpen = () => {
            this.setState({
                open:false
            })
        }

        dialogClose = () => {
            this.setState({
                open:false
            })
        }

        setting = () => {
            this.setState({
                open:false
            })
        }

        logout = () =>{
            this.setState({
                open:false
            })
        }

        transition = (props) => {
            return (
                <div>Up</div>
            )
        }

         render () {
            const{anchorEL} = this.state;
            const { getAvatarInitials, getRandomMaterialColor } = this.classes;
             return (

             <Menu
             id="simple-menu"
             anchorEl={anchorEl}
             keepMounted
             open={Boolean(anchorEl)}
             onClose={handleClose}
           >
            <MenuItem onClick={() => {this.setState({ openProfile: true });}}>My Profile</MenuItem>
            <Avatar className={classes.getRandomMaterialColor}>{this.props.getAvatarInitials()}</Avatar>
            {

                this.props.userRole === "Doctor" ? (
                    <div>
                        <MenuItem onClick={handleSend()}>Generate Token</MenuItem>
                        <MenuItem onClick={setting()}>Setting</MenuItem>
                    </div>
                ) : {
                this.props.userRole === "Patient" ? ( 
                    <div>
                        <MenuItem onClick={setting()}>Setting</MenuItem>
                    </div>
                )}
                <MenuItem onClick={logout()}>Logout</MenuItem>
            }
           </Menu>
             );
         }
    }
}

ProfileActions.propTypes = {
    auth:propTypes.object.isRequired, 
    userRole:propTypes.object.isRequired
};

export default ProfileActions;