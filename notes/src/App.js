import React, { useState } from "react";

const GeoLocation = () => {
    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then(response => response.json())
            .then(data => setDetails(data));
    };

    return (
        <>
                    <h2>привет, странник!</h2>
                        <button onClick={getUserGeolocationDetails}> узнать свой ip </button>
                                {details && (
                                        <p>
                                            IP: {details.IPv4}
                                        </p>
                                )}
        </>
    );
};

export default GeoLocation
