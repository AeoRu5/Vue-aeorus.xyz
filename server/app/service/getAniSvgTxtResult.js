'use strict';

const Service = require('egg').Service;

class GetAniSvgTxtResultService extends Service {
  async post() {
    try {
      const getEntryCount = await this.app.mysql.get('visitors', {
          id: 0
        }),
        entryCount = getEntryCount.entryCount + 1,
        row = {
          id: 0,
          entryCount
        },
        updateResult = await this.app.mysql.update('visitors', row),
        aniSvgTxtResult = {
          aniSvgTxt: '新の助',
          success: true
        };

      return aniSvgTxtResult;
    } catch (e) {
      return Object.assign(e, {
        success: false
      });
    }
  }
}

module.exports = GetAniSvgTxtResultService;