import React from "react";
import {Navigate} from 'react-router-dom';
import {DEFAULT_PROPS, PROP_TYPES} from "configs/ProtectedRoute.config";
import {IS_LOGGED_IN} from "configs/variables.config";


const TargetPage = ({Component, hasLayout, layout}) => {
    const isLogin = localStorage.getItem(IS_LOGGED_IN) === 'true';
    if (isLogin) {
        //TODO: Add home path here to navigate user if is logged in
        return <Navigate replace to={PATHS.HOME}/>
    }
    return (
        hasLayout ? (layout === 'User' ?
                //TODO: Add your layouts here
                    (
                        <UserLayout>
                            <Component/>
                        </UserLayout>
                    ) :
                    (
                        <AdminLayout>
                            <Component/>
                        </AdminLayout>
                    )
            ) :
            <Component/>
    )
}

const ProtectedRoute = (props) => {
    const {component, hasLayout, layout} = props
    return (
        <TargetPage Component={component}
                    hasLayout={hasLayout}
                    layout={layout}/>
    )
}

ProtectedRoute.defaultProps = DEFAULT_PROPS
ProtectedRoute.propTypes = PROP_TYPES

export {ProtectedRoute}