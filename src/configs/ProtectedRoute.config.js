import {PropTypes} from 'prop-types';

export const DEFAULT_PROPS = {
    hasLayout : true,
    layout : 'User'
}
export const PROP_TYPES = {
    hasLayout: PropTypes.bool,
    layout: PropTypes.string,
    component : PropTypes.func.isRequired
}