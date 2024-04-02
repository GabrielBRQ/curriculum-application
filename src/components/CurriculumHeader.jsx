import emailIcon from '../assets/img/email.png';
import blackEmailIcon from '../assets/img/black-email.png';
import phoneIcon from '../assets/img/phone-call.png';
import blackPhoneIcon from '../assets/img/black-phone-call.png'
import addressIcon from '../assets/img/maps-and-flags.png';
import blackAddressIcon from '../assets/img/black-location.png'

export function CurriculumHeader({ name, email, address, phone, selectedColor, isLightColor, isTop }) {



    return (
        <div className="curriculum-header" style={{backgroundColor: selectedColor, height: isTop ? 'auto' : 'calc(100% - 50px)' }}>
            <h1 style={{ color: isLightColor(selectedColor) ? '#000000' : '#ffffff' }} >{name}</h1>
            <h4>
                <div className="info" style={{ color: isLightColor(selectedColor) ? '#000000' : '#ffffff' }}><img src={isLightColor(selectedColor) ? blackEmailIcon : emailIcon} alt="email icon" />{email}</div>
                <div className="info" style={{ color: isLightColor(selectedColor) ? '#000000' : '#ffffff' }}><img src={isLightColor(selectedColor) ? blackPhoneIcon : phoneIcon} alt="phone icon" />{phone}</div>
                <div className="info" style={{ color: isLightColor(selectedColor) ? '#000000' : '#ffffff' }}><img src={isLightColor(selectedColor) ? blackAddressIcon : addressIcon} alt="address icon" />{address}</div>
            </h4>
        </div>
    );
}
