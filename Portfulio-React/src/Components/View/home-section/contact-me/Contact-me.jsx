import { Input ,Select , Checkbox , Button} from 'antd'
import { useForm } from 'react-hook-form';

import './contact-me.css'

export default function ContactMe() { 

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit =(data) => {
        console.log (data)
      }

    const {TextArea} = Input
    return (<>
        <div className="contact-me-main-container">
            <h3>Contact Me</h3>
            <h1>Request Free Consultancy</h1>
            <div className='contact-me-conatiner'>
            <div className="contact-me-details">
                <div className="contact-me-details-top">
                <h4>Hottline 24/7 <br></br><h2>(+23) 5535 68 68</h2></h4>
                </div>
                <div className='contact-me-discription-container'>
                    <div className="contact-me-discription">
                        <p><b>Address:</b>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    </div>
                    <div className="contact-me-discription">
                        <p><b>Email: </b>nevaeh.simmons@example.com </p>
                    </div>
                    <div className="contact-me-discription">
                        <p><b>Fax:</b> (702) 555-0122 </p>
                    </div>
                    <div className="contact-me-discription">
                        <p><b>Work Hour:</b> Mon - Sat: 9:00 - 18:00</p>
                    </div>
                </div>
            </div>

                <form className='contact-me-inputs' onSubmit={handleSubmit(onSubmit)}>
                   
                    <div className='full-name-inputs'>
                        <div className='full-name-container'>
                        <Input placeholder="First Name*" {...register('firstName',{required:'first Name is Required'})}/>
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                        </div>
                        <div className='full-name-container'>
                        <Input placeholder="Last Name*" {...register('lastName',{required:'last Name is Required'})}/>
                     
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                        </div>
                       
                    </div>
                    <div className='quetion-inputs'>
                    <Select className='question-select'
                            defaultValue="How We Can Help You ?"
                            
                            
                            options={[
                                {
                                value: 'More Information ? ',
                                label: 'More Information ?',
                                },
                                {
                                value: 'Certification ?',
                                label: 'Certification ?',
                                },
                                {
                                value: 'Experience ?',
                                label: 'Experience ?',
                                },
                                {
                                value: 'How We can Help You ?',
                                label: 'How We can Help You ?',
                                disabled: true,
                                },
                            ]}
                            />
                    </div>
                    <div className='textArea-input'>
                        <TextArea 
                            showCount
                            maxLength={100}

                            placeholder="How We Can Help You ?"
                            style={{
                                width:500,
                                height: 200,
                                resize: 'none',
                            }}
                            />
                    </div>
                    <Checkbox className='checkbox'>By submitting, i'm agreed to the <span className='checkbox-terms'>Terms & conditons </span></Checkbox>
                    <button className='contact-me-submit' type="submit">Request Now</button>
                 
                </form>
                
              
            </div>
            
        </div>
    
    </>)
}