import Route from '@ioc:Adonis/Core/Route'


/****************************
 * Route Prefixed with api/v1
 *****************************/

Route.group(() => {

    Route.resource('shifts', 'Api/ShiftController').only(['index', 'show'])

    Route.post('log-shift', 'Api/ShiftController.logShift')

}).prefix('/api/v1')

