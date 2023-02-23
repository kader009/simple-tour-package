import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import toast, { Toaster } from 'react-hot-toast';



// show data in ui and use toast
const Tours = ({tour, Remove}) => {
  const {name, info , image, price, id} = tour;
  const notify = () => toast.success('You Successfully Buy this package');
  const notify2 = () => toast.success('You Remove This Package');


  return (
    <div>
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><h4 className='text-primary'>{name}</h4></Card.Title>
        <Card.Text className='text-secondary'>
          {info.slice(0, 130) + '... Read more'}
        </Card.Text>
        <Card.Text className='text-primary fw-bold '>
        price: {price}
        </Card.Text>

        <div className='d-flex justify-content-between align-items-center'>
          
        <div onClick={notify2}>
          <Button onClick={() => Remove(id)}>Remove</Button>
          
        </div>
        <div>

        <Button onClick={notify} variant="primary">Buy Now <FontAwesomeIcon icon={faShoppingCart} /></Button>
        <Toaster/>
        </div>
        </div>

      </Card.Body>
    </Card>
    </div>
  );
};

export default Tours;