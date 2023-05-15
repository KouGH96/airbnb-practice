'use client';

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster />
    );
}

export default ToasterProvider;

//we have to use toaster libaray to show toast messages, but have to create provider
//to use it in the app, so we create this file and import it in app.tsx