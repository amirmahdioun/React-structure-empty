import React from 'react';
import {DEFAULT_PROPS, PROP_TYPES} from "configs/PublicRoute.config";


const TargetPage = ({Component, hasLayout, layout}) => {
    return (
        //TODO: Add layouts here
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

const PublicRoute = (props) => {
    const {component, hasLayout, layout} = props
    return (
        <TargetPage Component={component}
                    hasLayout={hasLayout}
                    layout={layout}/>
    );
};
PublicRoute.defaultProps = DEFAULT_PROPS;
PublicRoute.propTypes = PROP_TYPES

export {PublicRoute};