import React from 'react';
import CollectionsOverview from '../../components/collectiom-overview/collection-overview';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import{connect} from 'react-redux'
import {selectIsCollectionFetching,selectIsCollectionsLoaded } from '../../redux/shop/shop.selector.js';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action';
import {createStructuredSelector} from 'reselect'


import WithSppiner from '../../components/with-spinner/with-spinner.component'


const CollectionsOverviewWithSppiner=WithSppiner(CollectionsOverview);
const CollectionPageWithSppiner=WithSppiner(CollectionPage);


class ShopPage extends React.Component {
 
  
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    
  }

  render() {
    const { match } = this.props;
    const {IsCollectionFetching,IsCollectionsLoaded}=this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSppiner isLoading={IsCollectionFetching}  {...props}/>} />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props)=><CollectionPageWithSppiner isLoading={!IsCollectionsLoaded} {...props}/>}
        />
      </div>
    );
  }
}

const mapStateTOProps=createStructuredSelector({
  IsCollectionFetching:selectIsCollectionFetching,
  IsCollectionsLoaded:selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateTOProps, mapDispatchToProps)(ShopPage);