import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './history';

import HomeScreen from './containers/HomeScreen/HomeScreen';
import NewCategoryScreen from './containers/NewEditCategoryScreen/NewEditCategoryScreen';


export default () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/addNewCategory" component={NewCategoryScreen} />
            <Route exact path="/editCategory/:id" component={NewCategoryScreen} />

            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);