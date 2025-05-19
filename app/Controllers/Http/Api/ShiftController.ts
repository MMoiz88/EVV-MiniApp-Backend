import ApiBaseController from 'App/Controllers/Http/Api/ApiBaseController'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import ShiftRepo from 'App/Repos/ShiftRepo'
import LogShiftValidator from 'App/Validators/LogShiftValidator'


export default class ModuleController extends ApiBaseController {

    constructor() {
        super(ShiftRepo)
    }

    async logShift(ctx: HttpContextContract) {
        await super.validateBody(ctx,LogShiftValidator)
        let row = await ShiftRepo.logVisit(ctx.request)
        return this.apiResponse('Shift logged Successfully', row)
    }


}
