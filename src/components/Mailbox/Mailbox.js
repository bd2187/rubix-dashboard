import React, { useState } from "react";
import Card from "../common/Card/Card";

function Header_input({ value, update_value, label, placeholder }) {
    function update_text(evt) {
        update_value(evt.target.value);
    }

    return (
        <div>
            <p>{label}</p>
            <input
                type="text"
                value={value}
                onChange={update_text}
                placeholder={placeholder}
            />
        </div>
    );
}

function Mailbox_header({
    to,
    set_to,
    cc,
    set_cc,
    bcc,
    set_bcc,
    subject,
    set_subject
}) {
    return (
        <div>
            <div>
                {/* link to inbox goes here */}
                {/* profile picture goes here */}
            </div>
            <div>
                <Header_input
                    value={to}
                    update_value={set_to}
                    label={"To"}
                    placeholder={"Ex: sender@example.com"}
                />
                <Header_input value={cc} update_value={set_cc} label={"CC"} />
                <Header_input
                    value={bcc}
                    update_value={set_bcc}
                    label={"BCC"}
                />
                <Header_input
                    value={subject}
                    update_value={set_subject}
                    label={"Subject"}
                    placeholder={"Enter a subject title here"}
                />
            </div>
        </div>
    );
}

function Mailbox() {
    // State for Text fields in email
    const [to, set_to] = useState("");
    const [cc, set_cc] = useState("");
    const [bcc, set_bcc] = useState("");
    const [subject, set_subject] = useState("");
    const [body, set_body] = useState("");

    return (
        <Card>
            <Mailbox_header
                to={to}
                set_to={set_to}
                cc={cc}
                set_cc={set_cc}
                bcc={bcc}
                set_bcc={set_bcc}
                subject={subject}
                set_subject={set_subject}
            />
        </Card>
    );
}

export default Mailbox;
