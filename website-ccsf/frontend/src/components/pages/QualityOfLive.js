import { React, Component } from 'react';
import '../../App.css';
import Footer from '../Footer';
import SearchQualityOfLiveSection from '../SearchQualityOfLiveSection';
import SearchTable from '../Table';
import load from '../../utils/load';

export default class QualityOfLive extends Component {
    constructor(props) {
        super(props);
        // set state
        this.state = {
            columns: [
                {
                    Header: 'Indexes',
                    accessor: 'indexName',
                },
                {
                    Header: 'Value',
                    accessor: 'value'
                },
            ],
            data: []
        };
        this.performSearch = this.performSearch.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    updateData(indexes) {
        let result = Object.entries(indexes[0].fields).map(( [k, v] ) => ({ 'indexName': k, 'value': v }));
        this.setState({ data: result });
    }

    performSearch(query) {
        load("http://127.0.0.1:8000/city/1").then(indexes => {
            this.updateData(JSON.parse(indexes));
        }).catch(err => {
            alert(err);
        });
    }

    render() {
        return (
            <>
                <SearchQualityOfLiveSection searchCallback={this.performSearch} />
                <SearchTable columns={this.state.columns} data={this.state.data} />
                <Footer />
            </>
        )
    }
}

// const data = React.useMemo(() =>[
//     {
//       key: 1,
//       city_id: 1,
//       indexName: 'quality_of_life_index',
//       value: 50,
//     },
//     {
//       key: 2,
//       city_id: 1,
//       indexName: 'purchasing_power_index',
//       value: 20,
//     },
//     {
//       key: 3,
//       city_id: 1,
//       indexName: 'safety_index',
//       value: 12,
//     },
//     {
//       key: 4,
//       city_id: 1,
//       indexName: 'health_care_index',
//       value: 30,
//     },
//     {
//       key: 5,
//       city_id: 1,
//       indexName: 'climate_index',
//       value: 5,
//     },
//     {
//       key: 6,
//       city_id: 1,
//       indexName: 'cost_of_living_index',
//       value: 14,
//     },
//     {
//       key: 7,
//       city_id: 1,
//       indexName: 'property_price_to_income_ration',
//       value: 150,
//     },
//     {
//       key: 8,
//       city_id: 1,
//       indexName: 'traffic_commute_time_index',
//       value: 70,
//     },
//     {
//       key: 9,
//       city_id: 1,
//       indexName: 'pollution_index',
//       value: 51,
//     },

//   ],
//   []
//   );