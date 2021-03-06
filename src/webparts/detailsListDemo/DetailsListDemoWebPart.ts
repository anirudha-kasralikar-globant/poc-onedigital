import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DetailsListDemoWebPartStrings';
import DetailsListDemo from './components/DetailsListDemo';
import { IDetailsListDemoProps } from './components/IDetailsListDemoProps';
import {
  Environment, EnvironmentType
} from '@microsoft/sp-core-library';

export interface IDetailsListDemoWebPartProps {
  description: string;
}

export default class DetailsListDemoWebPart extends BaseClientSideWebPart<IDetailsListDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDetailsListDemoProps > = React.createElement(
      DetailsListDemo,
      {
        description: this.properties.description,
        context: this.context,
        isLocal: Environment.type === EnvironmentType.Local
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
