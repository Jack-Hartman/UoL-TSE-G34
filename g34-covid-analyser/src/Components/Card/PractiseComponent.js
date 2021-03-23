import { Button, Grommet } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { Card, CardHeader, CardBody, CardFooter } from 'grommet';


const PractiseComponent = () => {
    return (
      <>
         <Card  height="small" width="small" background="light-1">
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium">Body</CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-2">   
            {/* <Button
            icon={<Icons.Favorite color="red" />}
            hoverIndicator
            /> */}
           </CardFooter>
        </Card>
      </>
    );
}

export default PractiseComponent;