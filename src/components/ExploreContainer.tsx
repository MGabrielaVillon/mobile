import './ExploreContainer.css';

import { IonAlert, IonButton } from '@ionic/react';

//no se importa el react porque no se esta usando 
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <>
        <IonButton id="present-alert">Click Me</IonButton>
        <IonAlert
          trigger="present-alert"
          header="A Short Title Is Best"
          subHeader="A Sub Header Is Optional"
          message="A message should be a short, complete sentence."
          buttons={['Action']}
        ></IonAlert>
      </>
    </div>
  );
};

export default ExploreContainer;
