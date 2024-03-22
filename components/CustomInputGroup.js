import React from 'react';

const CustomInputGroup = () => {
    return (
        <div className="input-group mb-3" style={{ paddingRight: '5rem' }}>
            <input type="text" className="form-control search-job" placeholder="E.g. networking" aria-label="Recipient's username" aria-describedby="button-addon2" style={{ borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px' }} />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary btn-lg" type="button" id="button-addon2" style={{ borderTopRightRadius: '30px', borderBottomRightRadius: '30px' }}>Search jobs</button>
            </div>
        </div>

    );
};

export default CustomInputGroup;
