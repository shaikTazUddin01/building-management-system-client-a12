import React from 'react';

const CuponCard = ({item}) => {
    return (
<tr className='border border-black'>
        <th>{item?._id}</th>
        <td>{item?.cuponCode}</td>
        <td>{item?.discount}</td>
        <td>{item?.description}</td>
      </tr>

    );
};

export default CuponCard;