import './UserPageConfig.css';
import iconUsuarioNone from '../../assets/user_logo_none.svg';

function UserPageConfig() {
    return (
        <div className='user_all_content'>
            <div className='sect_user_content'>
                <section className='user_page_container'>
                    <div className='user_image'>
                        <div className='user_logo_icon'>
                            <img src={iconUsuarioNone} alt="" />
                        </div>
                        <div className='user_nickname'>
                            <span className='user_nick_title'><b>USUARIO</b></span>
                        </div>
                    </div>
                </section>
                <section className='user_information'>
                    <ul className='user_items'>
                        <li><b>Email:</b></li>
                        <li><b>Number:</b></li>
                        <li><b>Gender:</b></li>
                        <li><b>Age:</b></li>
                        <li><b>Birthday:</b></li>
                    </ul>
                    <div className='change_information'>
                        <button>CHANGE INFORMATION</button>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default UserPageConfig;