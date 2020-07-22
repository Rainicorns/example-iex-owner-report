import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import Page from '../Page/Page';


export default function ActivityFunnelSummary({ theme }) {

    const appointmentsChartData = [
        { week: 'KW01', requests: 4, offers: 3, showings: 3 },
        { week: 'KW02', requests: 7, offers: 3, showings: 3 },
        { week: 'KW03', requests: 8, offers: 3, showings: 3 },
        { week: 'KW04', requests: 12, offers: 3, showings: 3 },
        { week: 'KW05', requests: 4, offers: 3, showings: 3 },
        { week: 'KW06', requests: 5, offers: 3, showings: 3 },
        { week: 'KW07', requests: 9, offers: 3, showings: 3 },
        { week: 'KW08', requests: 11, offers: 3, showings: 3 },
    ]

    const keys = ['requests', 'offers', 'showings']


    return (
        <Page title="Summary" withMargin={true}>
            <h2>Activity</h2>

            <div style={{
                width: '100%',
                height: '80mm',
                paddingBottom: '10mm',
                color: 'black'
            }}>
                <ResponsiveBar
                    data={appointmentsChartData}
                    keys={keys}
                    indexBy="week"
                    margin={{ top: 0, right: 100, bottom: 50, left: 0 }}
                    colors={[theme.brand.colors.primary, theme.brand.colors.secondary, theme.brand.colors.tertiary]}

                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'week',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}

                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}

                ></ResponsiveBar>
            </div>
            <p>This chart shows the activities that have happen on your estate over the past week(s).</p>
            <ul>
                <li><b>Requests</b> are incoming requests about the object. </li>
                <li><b>Offers</b> are exposes sent out to people.</li>
                <li><b>Showings</b> are showings held.</li>
            </ul>




        </Page>

    );
}