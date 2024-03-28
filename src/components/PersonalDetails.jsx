import { useState } from "react";

export function PersonalDetails({ onNameChange, onEmailChange, onPhoneChange, onAddressChange }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleName = (event) => {
        const newName = event.target.value;
        setName(newName);
        
        // Chama a função onNameChange para passar o novo nome para o componente pai
        onNameChange(newName);
    };

    const handleEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        
        // Chama a função onNameChange para passar o novo nome para o componente pai
        onEmailChange(newEmail);
    };

    const handlePhone = (event) => {
        const newPhone = event.target.value;
        setPhone(newPhone);
        
        // Chama a função onNameChange para passar o novo nome para o componente pai
        onPhoneChange(newPhone);
    };

    const handleAddress = (event) => {
        const newAddress = event.target.value;
        setAddress(newAddress);
        
        // Chama a função onNameChange para passar o novo nome para o componente pai
        onAddressChange(newAddress);
    };


    return (
        <form className="personal-div">
            <h2>Personal Details</h2>
            <div className="input-group">
                <label htmlFor='full-name'>
                    <span className="label-text">Full name</span>
                </label>
                <input type="text" id="full-name" placeholder="First and last name" onChange={handleName}/>
            </div>
            <div className="input-group">
                <label htmlFor='email'>
                    <span className="label-text">Email</span>
                </label>
                <input type="text" id="email" placeholder="Email" onChange={handleEmail}/>
            </div>
            <div className="input-group">
                <label htmlFor='phone-number'>
                    <span className="label-text">Phone number</span>
                </label>
                <input type="text" id="phone-number" placeholder="Phone number" onChange={handlePhone} />
            </div>
            <div className="input-group">
                <label htmlFor='address'>
                    <span className="label-text">Address</span>
                </label>
                <input type="text" id="address" placeholder="Address" onChange={handleAddress}/>
            </div>
        </form>
    )
}
