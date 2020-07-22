import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import Page from '../Page/Page';


export default function OfferBreakdown() {

    const offerData = [
        { phase: 'Interested', count: 2 },
        { phase: 'Viewing Scheduled', count: 6 },
        { phase: 'Oppened', count: 12 },
        { phase: 'Offered', count: 26 },
    ]

    return (
        <Page title="Offer Breakdown" withMargin={true}>


            <div style={{
                width: '100%',
                height: '80mm',
                paddingBottom: '10mm',
                color: 'black'
            }}>
                <ResponsiveBar
                    data={offerData}
                    keys={['count']}
                    indexBy="phase"
                    layout="horizontal"
                    margin={{ top: 0, right: 0, bottom: 0, left: 103 }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'phase',
                        legendPosition: 'middle',
                        legendOffset: -110
                    }}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                ></ResponsiveBar>
            </div>
            <p>
                This chart shows the activities that have happen on your estate over the past week(s).
              <b>Requests</b> are incoming requests about the object. <b>Offers</b> are exposes sent out to people.
              <b>Showings</b> are showings held.
          </p>
        </Page>
    );
}