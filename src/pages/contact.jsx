import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'; // ← FaGithub に変更！

const Contact = () => {
    const ContactItem = ({ icon: Icon, label, text, link, color }) => (
        <li className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
            <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
                <Icon className={`text-4xl ${color}`} />
            </div>
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-Light_blue font-medium hover:underline"
                >
                    {text}
                </a>
            ) : (
                <span className="text-xl text-gray-700 font-medium">{text}</span>
            )}
        </li>
    );

    return (
        <div className="max-w-xl mx-auto mt-12 p-4 px-4 sm:px-8 rounded-3xl border border-Light_blue shadow-xl">
            <h1 className="text-4xl font-extrabold text-Light_blue mb-6 text-center">Contact Us</h1>
            <p className="mb-6 text-center text-lg text-gray-600">お気軽にご連絡ください</p>
            <ul className="space-y-5">
                <ContactItem
                    icon={MdEmail}
                    label="Email"
                    text="kamomeyuru@gmail.com"
                    link="mailto:kamomeyuru@gmail.com"
                    color="text-pink-500"
                />
                <ContactItem
                    icon={FaGithub}
                    label="GitHub"
                    text="@yurunull"
                    link="https://github.com/yurunull"
                    color="text-gray-800"
                />
                <ContactItem
                    icon={FaInstagram}
                    label="Instagram"
                    text="@yuruyuru_uoa"
                    link="https://www.instagram.com/yuruyuru_uoa"
                    color="text-pink-400"
                />
                <ContactItem
                    icon={FaTwitter}
                    label="Twitter"
                    text="@yurunull"
                    link="https://twitter.com/yurunull"
                    color="text-sky-500"
                />
            </ul>
        </div>
    );
};

export default Contact;
