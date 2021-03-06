import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { white } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from '../../assets/styles';


/**
 * renders data boxes on dashboard
 * @param {object} props 
 */
const InfoBox = (props) => {
  const { color, title, value, Icon } = props;
  const iconSpan = {
    float: 'left',
    height: 50,
    width: 50,
    textAlign: 'center',
    backgroundColor: color
  };
  return (
    <div>
      <Paper>
        <span style={iconSpan} >
          <Icon
            color={white}
            style={styles.icon}
          />
        </span>

        <div style={styles.dashboardInfoContent}>
          <span style={styles.dashboardInfoTitle}>{title}</span>
          <span style={styles.dashboardInfoNumber}>{value}</span>
        </div>
      </Paper>
    </div>
  );
};


InfoBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired
};

export default InfoBox;

