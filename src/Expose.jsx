import React, { useContext } from 'react';
import './Expose.scss';
import { basetheme as theme } from './styles/IEXTheme'
import { Stage, ffmap } from './lib/Context'
import { ffmd } from './lib/FormatUtils'

import FrontCover from './sections/FrontCover/FrontCover';
import FactSheet from './sections/FactSheet/FactSheet';
import TextPage from './sections/TextPage/TextPage';
import PicturePages from './sections/PicturePages/PicturePages';
import FloorPlans from './sections/FloorPlans/FloorPlans';
import AgentDetail from './sections/AgentDetail/AgentDetail';
import Fact from './sections/FactSheet/Fact';
import ContractAgreement from './sections/ContractAgreement/ContractAgreement';
import Page from './sections/Page/Page';


import { ResponsiveBar } from '@nivo/bar'
import ActivityFunnelSummary from './sections/ActivityFunnelSummary/ActivityFunnelSummary';
import OfferBreakdown from './sections/OfferBreakdown/OfferBreakdown';
import ActivityTimeline from './sections/ActivityTimeline/ActivityTimeline';

function Expose() {


  return (
    <>
      <Stage level="0">
        <FrontCover theme={theme} title={`Owner Report for ${ffmap`contact.salutation`} ${ffmap`contact.lastName`}`} imgObj={ffmap`entity.mainImage`}></FrontCover>
        <ActivityFunnelSummary theme={theme} />
        <OfferBreakdown theme={theme} />
        <ActivityTimeline theme={theme} />

        <AgentDetail theme={theme}></AgentDetail>
      </Stage>
    </>
  );
}

export default Expose;
