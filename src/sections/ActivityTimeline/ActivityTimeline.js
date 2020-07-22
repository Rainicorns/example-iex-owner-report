import React from 'react'
import Page from '../Page/Page';


export default function ActivityTimeline() {

    const activityData = [
        { activityID: '1', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: '2', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: '3', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: '4', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: '5', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: '6', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: '7', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: '8', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: '9', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: 'a', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },
        { activityID: 'b', date: '11/11/11', activity: 'yo yo', contact: 'Smith, John', contactID: '1', },

    ]

    return (
        <Page title="Timeline" withMargin={true}>
            <div className="activityTimeline">
                <div className="activityRow header">
                    <div className='activityItem date'>Date</div>
                    <div className='activityItem activity'>Activity</div>
                    <div className='activityItem contact'>Contact</div>
                </div>
                {activityData.map(row => {

                    return (<div className="activityRow">
                        <div className='activityItem date'>{row.date}</div>
                        <div className='activityItem activity'>{row.activity}</div>
                        <div className='activityItem contact'>{row.contact} [{row.contactID}]</div>
                    </div>)


                })}


            </div>
        </Page>
    );
}