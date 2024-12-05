import React from "react";

const GoogleMap = () => {
    return (
        <section className="w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.6829687459526!2d-74.4722615!3d40.2605765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3d8e6efbd9511%3A0x79c1b4dee05f5677!2s4%20Lily%20Ct%2C%20Monroe%20Township%2C%20NJ%2008831%2C%20USA!5e0!3m2!1sen!2s!4v1731041936108!5m2!1sen!2s"
                width="100%"
                height="650"
                loading="lazy"
                style={{ border: "0" }}
                allowFullScreen
            ></iframe>
        </section>
    );
};

export default GoogleMap;
