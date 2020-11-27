// =============================================================================
// CBM Demo
// (c) Mathigon
// =============================================================================


import '../shared/components/buckets';

import {Point} from '@mathigon/euclid';
import {Step} from '../shared/types';


function bimetric(px: number, py: number, pz: number) {
		const sq= (-1)*1.414/4;
		const cx = sq*px + py ;
		const cy = sq*px + pz ;
		return new Point(cx, cy);
}


// -----------------------------------------------------------------------------
// 斜二侧画正方体

export function xie($step: Step) {
  $step.model.bimetric = bimetric;
}

// -----------------------------------------------------------------------------
// 高考2020年数学19题

export function geo2020($step: Step) {
  $step.model.bimetric = bimetric;
}


