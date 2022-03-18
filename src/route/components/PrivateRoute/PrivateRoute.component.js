import {Navigate} from 'react-router-dom';
import {DEFAULT_PROPS, PROP_TYPES} from "configs/PrivateRoute.config";
import {IS_LOGGED_IN} from "configs/variables.config";
import React from "react";
import {PATHS} from "configs/routes.config";




const TargetPage = ({Component, hasLayout, layout}) => {

    const isLoggedIn = localStorage.getItem(IS_LOGGED_IN) === 'true';

    if (!isLoggedIn) {
        //TODO: Add login path to navigate if user is not logged in
        return <Navigate replace to={PATHS.LOGIN}/>
    } else {
        //TODO: who am I api should be call here
        store.dispatch(whoami());
        return (
            //TODO: Add your layouts here
            hasLayout ? (layout === 'User' ? (
                        <UserLayout>
                            <Component/>
                        </UserLayout>
                    ) : (
                        <AdminLayout>
                            <Component/>
                        </AdminLayout>
                    )

                ) :
                <Component/>
        )
    }

}

const PrivateRoute = (props) => {
    const {component, hasLayout, layout} = props;

    return (
        <TargetPage Component={component}
                    hasLayout={hasLayout}
                    layout={layout}/>
    );
}

PrivateRoute.defaultProps = DEFAULT_PROPS;
PrivateRoute.propTypes = PROP_TYPES;

export {PrivateRoute};
