/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Internal option interface.
 */
export interface Option {
  /**
   * Option label.
   */
  label: string | JSX.Element;
  /**
   * Option value.
   */
  value: string;
  /**
   * Option group name.
   */
  group: string | undefined;
  /**
   * Option tags.
   */
  tags: string[];
  /**
   * Option custom data.
   */
  custom: any;
}
