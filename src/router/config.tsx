
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import AboutPage from '../pages/about/page';
import ContactPage from '../pages/contact/page';
import PortfolioPage from '../pages/portfolio/page';
import ServicesPage from '../pages/services/page';
import KitchenRenovationPage from '../pages/services/kitchen-renovation/page';
import BathroomRenovationPage from '../pages/services/bathroom-renovation/page';
import InteriorRefurbishmentPage from '../pages/services/interior-refurbishment/page';
import PropertyRefurbishmentPage from '../pages/services/property-refurbishment/page';
import PeriodRestorationPage from '../pages/services/period-restoration/page';
import LuxuryWallFloorFinishesPage from '../pages/services/luxury-wall-floor-finishes/page';
import LightingIntegrationPage from '../pages/services/lighting-integration/page';
import WindowInstallationPage from '../pages/services/window-installation/page';
import WestminsterPage from '../pages/areas/westminster/page';
import KensingtonChelseaPage from '../pages/areas/kensington-chelsea/page';
import CamdenPage from '../pages/areas/camden/page';
import IslingtonPage from '../pages/areas/islington/page';
import CentralLondonPage from '../pages/areas/central-london/page';
import HammersmithFulhamPage from '../pages/areas/hammersmith-fulham/page';
import WandsworthPage from '../pages/areas/wandsworth/page';
import RichmondPage from '../pages/areas/richmond/page';
import BrentPage from '../pages/areas/brent/page';
import HarrowPage from '../pages/areas/harrow/page';
import EalingPage from '../pages/areas/ealing/page';
import BarnetPage from '../pages/areas/barnet/page';
import WembleyPage from '../pages/locations/wembley/page';
import NotFoundPage from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/services/kitchen-renovation',
    element: <KitchenRenovationPage />,
  },
  {
    path: '/services/bathroom-renovation',
    element: <BathroomRenovationPage />,
  },
  {
    path: '/services/interior-refurbishment',
    element: <InteriorRefurbishmentPage />,
  },
  {
    path: '/services/property-refurbishment',
    element: <PropertyRefurbishmentPage />,
  },
  {
    path: '/services/period-restoration',
    element: <PeriodRestorationPage />,
  },
  {
    path: '/services/luxury-wall-floor-finishes',
    element: <LuxuryWallFloorFinishesPage />
  },
  {
    path: '/services/lighting-integration',
    element: <LightingIntegrationPage />
  },
  {
    path: '/services/window-installation',
    element: <WindowInstallationPage />
  },
  {
    path: '/areas/westminster',
    element: <WestminsterPage />,
  },
  {
    path: '/areas/kensington-chelsea',
    element: <KensingtonChelseaPage />,
  },
  {
    path: '/areas/camden',
    element: <CamdenPage />,
  },
  {
    path: '/areas/islington',
    element: <IslingtonPage />,
  },
  {
    path: '/areas/central-london',
    element: <CentralLondonPage />,
  },
  {
    path: '/areas/hammersmith-fulham',
    element: <HammersmithFulhamPage />,
  },
  {
    path: '/areas/wandsworth',
    element: <WandsworthPage />,
  },
  {
    path: '/areas/richmond',
    element: <RichmondPage />,
  },
  {
    path: '/areas/brent',
    element: <BrentPage />,
  },
  {
    path: '/areas/harrow',
    element: <HarrowPage />,
  },
  {
    path: '/areas/ealing',
    element: <EalingPage />,
  },
  {
    path: '/areas/barnet',
    element: <BarnetPage />,
  },
  {
    path: '/locations/wembley',
    element: <WembleyPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
