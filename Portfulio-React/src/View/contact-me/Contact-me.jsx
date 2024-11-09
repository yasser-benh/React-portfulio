import { Input, Select, Checkbox, message } from "antd";
import { Controller, useForm } from "react-hook-form";

import "./contact-me.css";
import { useMutation } from "@tanstack/react-query";
import { addContact } from "../../../api/addContact";

export default function ContactMe() {
  const mutation = useMutation({ mutationFn: addContact ,
    onSuccess: () => {
      reset(),
      message.success('message send')
    },
    onError: ()=> {
      message.success("failde send message")
    }
  });

  const handleAddContact = (data) => {
    mutation.mutate(data);
  };

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { TextArea } = Input;

  const onSubmit = (data) => {
    console.log(data);
    handleAddContact(data);
  };

  return (
    <>
      <div className="contact-me-main-container">
        <h3>Contact Me</h3>
        <h1>Request Free Consultancy</h1>
        <div className="contact-me-conatiner">
          <div className="contact-me-details">
            <div className="contact-me-details-top">
              <h4>
                Hottline 24/7 <br />
                <span>(+23) 5535 68 68</span>
              </h4>
            </div>
            <div className="contact-me-discription-container">
              <div className="contact-me-discription">
                <p>
                  <b>Address:</b> 2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </div>
              <div className="contact-me-discription">
                <p>
                  <b>Email:</b> nevaeh.simmons@example.com
                </p>
              </div>
              <div className="contact-me-discription">
                <p>
                  <b>Fax:</b> (702) 555-0122
                </p>
              </div>
              <div className="contact-me-discription">
                <p>
                  <b>Work Hour:</b> Mon - Sat: 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          <form className="contact-me-inputs" onSubmit={handleSubmit(onSubmit)}>
            <div className="full-name-inputs">
              <div className="full-name-container">
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "First Name is Required" }}
                  render={({ field }) => (
                    <Input {...field} placeholder="First Name*" />
                  )}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>
              <div className="full-name-container">
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Last Name is Required" }}
                  render={({ field }) => (
                    <Input {...field} placeholder="Last Name*" />
                  )}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="quetion-inputs">
              <Controller
                name="question"
                control={control}
                defaultValue="How We Can Help You ?"
                render={({ field }) => (
                  <Select
                    {...field}
                    className="question-select"
                    options={[
                      {
                        value: "More Information ?",
                        label: "More Information ?",
                      },
                      { value: "Certification ?", label: "Certification ?" },
                      { value: "Experience ?", label: "Experience ?" },
                      {
                        value: "How We can Help You ?",
                        label: "How We can Help You ?",
                        disabled: true,
                      },
                    ]}
                  />
                )}
              />
            </div>
            <div className="textArea-input">
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    showCount
                    maxLength={100}
                    placeholder="How We Can Help You ?"
                    style={{ height: 200, resize: "none" }}
                  />
                )}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <div className="checkbook-container">
              <Controller
                name="terms"
                control={control}
                rules={{
                  required: "You must agree to the terms and conditions",
                }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    className="checkbox"
                    checked={field.value}
                  >
                    <p>
                      By submitting, I'm agreed to the{" "}
                      <span className="checkbox-terms">Terms & Conditions</span>{" "}
                    </p>
                  </Checkbox>
                )}
              />
              {errors.terms && <p>{errors.terms.message}</p>}
            </div>
            <button className="contact-me-submit" type="submit">
              Request Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
