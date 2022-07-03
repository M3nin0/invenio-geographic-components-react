/*
 * This file is part of GEO-Metadata-Previewer.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Metadata-Previewer is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import L from 'leaflet';

import { BaseMapLayers } from './BaseMapLayers';
import { renderWithMapContainer } from '@tests/setup';

describe('BaseMapLayers tests', () => {
  describe('Render tests', () => {
    it('should render without crashing', () => {
      renderWithMapContainer(
        <>
          <BaseMapLayers />
        </>
      );
    });
  });
});
