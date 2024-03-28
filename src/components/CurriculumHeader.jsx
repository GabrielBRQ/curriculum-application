import emailIcon from '../assets/img/email.png';
import phoneIcon from '../assets/img/phone-call.png';
import addressIcon from '../assets/img/maps-and-flags.png';

export function CurriculumHeader({ name, email, address, phone }) {
    return (
        <div className="curriculum-header">
            <h1>{name}</h1>
            <h4>
                <div className="info"><img src={emailIcon} alt="email icon" />{email}</div>
                <div className="info"><img src={phoneIcon} alt="phone icon" />{phone}</div>
                <div className="info"><img src={addressIcon} alt="address icon" />{address}</div>
            </h4>
        </div>
    );
}
