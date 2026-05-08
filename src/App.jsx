import React, { useState, useCallback } from 'react';
import OnboardingScreen from './screens/OnboardingScreen.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import GarageScreen from './screens/GarageScreen.jsx';
import BikeDetailScreen from './screens/BikeDetailScreen.jsx';
import MembershipScreen from './screens/MembershipScreen.jsx';
import PaymentScreen from './screens/PaymentScreen.jsx';
import ServiceScreen from './screens/ServiceScreen.jsx';
import ServiceConfirmScreen from './screens/ServiceConfirmScreen.jsx';
import EventsScreen from './screens/EventsScreen.jsx';
import RidesScreen from './screens/RidesScreen.jsx';
import NewsScreen from './screens/NewsScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import ChatScreen from './screens/ChatScreen.jsx';

const screens = {
  onboarding: OnboardingScreen,
  home: HomeScreen,
  garage: GarageScreen,
  bike: BikeDetailScreen,
  membership: MembershipScreen,
  payment: PaymentScreen,
  service: ServiceScreen,
  serviceConfirm: ServiceConfirmScreen,
  events: EventsScreen,
  rides: RidesScreen,
  news: NewsScreen,
  profile: ProfileScreen,
  chat: ChatScreen,
};

export default function App() {
  const [route, setRoute] = useState({ id: 'onboarding', params: null });
  const go = useCallback((id, params = null) => {
    if (!screens[id]) {
      console.warn(`Unknown route: ${id}`);
      return;
    }
    setRoute({ id, params });
    const node = document.querySelector('.yz-frame .scroll');
    if (node) node.scrollTop = 0;
  }, []);

  const Screen = screens[route.id] ?? HomeScreen;

  return (
    <div className="yz-stage">
      <div className="yz-frame">
        <div className="yz-island"/>
        <Screen go={go} params={route.params}/>
        <div className="yz-home-indicator"><span/></div>
      </div>
    </div>
  );
}
