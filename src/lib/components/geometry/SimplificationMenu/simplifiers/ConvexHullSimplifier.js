/*
 * This file is part of GEO-Metadata-Previewer.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Metadata-Previewer is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'semantic-ui-react';

import { i18next } from '@translations/i18next';

import { GeometryOperator } from '../../../../base';
import { MenuContext } from '../SimplificationMenuContext';

/**
 * Convex Hull simplifier method.
 * @constructor
 *
 * @param {String} simplifierName Simplifier name presented in the interface.
 * @returns {JSX.Element}
 */
export const ConvexHullSimplifier = ({ simplifierName }) => {
  const simplifierId = 'convex';
  const menuContext = useContext(MenuContext);

  const processData = () => {
    // processing data
    if (!(menuContext.menu.activeItem === simplifierId)) {
      menuContext.data.setTransformedData(
        GeometryOperator.convexHull(menuContext.data.rawData)
      );
    }

    menuContext.menu.setActiveItem(simplifierId);
  };

  return (
    <Menu.Item
      name={simplifierId}
      content={simplifierName}
      active={menuContext.menu.activeItem === simplifierId}
      onClick={processData}
    />
  );
};

ConvexHullSimplifier.propTypes = {
  simplifierName: PropTypes.string,
};

ConvexHullSimplifier.defaultProps = {
  simplifierName: i18next.t('Convex Hull'),
};
