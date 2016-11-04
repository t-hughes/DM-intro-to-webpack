import angular from 'angular';
import { MainCtrl } from './main/main.ctrl';
import { SomeService } from './services/some.service';

export const App = angular.module('webpack-demo', [])
.controller('MainCtrl', MainCtrl)
.service('someService', SomeService);
