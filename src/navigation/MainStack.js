import React from 'react';
import {Catalog, CatalogDetail} from '../screens';
import TabRoutes from './TabRoutes';

export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name="Tabs"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        name="CatalogDetail"
        component={CatalogDetail}
        options={({route}) => ({title: route.params.title})}
      />
    </>
  );
}
