window.SIDEBAR_ITEMS = {"fn":[["add16","Adds packed 16-bit signed numbers, discarding overflow bits"],["add8","Adds packed 8-bit signed numbers, discarding overflow bits"],["clrs16","Count the number of redundant sign bits of the packed 16-bit elements"],["clrs32","Count the number of redundant sign bits of the packed 32-bit elements"],["clrs8","Count the number of redundant sign bits of the packed 8-bit elements"],["clz16","Count the number of leading zero bits of the packed 16-bit elements"],["clz32","Count the number of leading zero bits of the packed 32-bit elements"],["clz8","Count the number of leading zero bits of the packed 8-bit elements"],["cmpeq16","Compare equality for packed 16-bit elements"],["cmpeq8","Compare equality for packed 8-bit elements"],["cras16","Cross adds and subtracts packed 16-bit signed numbers, discarding overflow bits"],["crsa16","Cross subtracts and adds packed 16-bit signed numbers, discarding overflow bits"],["fence_i","Generates the `FENCE.I` instruction"],["frcsr","Reads the floating-point control and status register `fcsr`"],["frflags","Reads the floating-point accrued exception flags register `fflags`"],["frrm","Reads the floating-point rounding mode register `frm`"],["fscsr","Swaps the floating-point control and status register `fcsr`"],["fsflags","Swaps the floating-point accrued exception flags register `fflags`"],["fsrm","Swaps the floating-point rounding mode register `frm`"],["hfence_gvma","Hypervisor memory management fence for guest physical address and virtual machine"],["hfence_gvma_all","Hypervisor memory management fence for all virtual machines and guest physical addresses"],["hfence_gvma_gaddr","Hypervisor memory management fence for guest physical address"],["hfence_gvma_vmid","Hypervisor memory management fence for given virtual machine"],["hfence_vvma","Hypervisor memory management fence for given guest virtual address and guest address space"],["hfence_vvma_all","Hypervisor memory management fence for all guest address spaces and guest virtual addresses"],["hfence_vvma_asid","Hypervisor memory management fence for given guest address space"],["hfence_vvma_vaddr","Hypervisor memory management fence for given guest virtual address"],["hinval_gvma","Invalidate hypervisor translation cache for guest physical address and virtual machine"],["hinval_gvma_all","Invalidate hypervisor translation cache for all virtual machines and guest physical addresses"],["hinval_gvma_gaddr","Invalidate hypervisor translation cache for guest physical address"],["hinval_gvma_vmid","Invalidate hypervisor translation cache for given virtual machine"],["hinval_vvma","Invalidate hypervisor translation cache for given guest virtual address and guest address space"],["hinval_vvma_all","Invalidate hypervisor translation cache for all guest address spaces and guest virtual addresses"],["hinval_vvma_asid","Invalidate hypervisor translation cache for given guest address space"],["hinval_vvma_vaddr","Invalidate hypervisor translation cache for given guest virtual address"],["hlv_b","Loads virtual machine memory by signed byte integer"],["hlv_bu","Loads virtual machine memory by unsigned byte integer"],["hlv_d","Loads virtual machine memory by double integer"],["hlv_h","Loads virtual machine memory by signed half integer"],["hlv_hu","Loads virtual machine memory by unsigned half integer"],["hlv_w","Loads virtual machine memory by signed word integer"],["hlv_wu","Loads virtual machine memory by unsigned word integer"],["hlvx_hu","Accesses virtual machine instruction by unsigned half integer"],["hlvx_wu","Accesses virtual machine instruction by unsigned word integer"],["hsv_b","Stores virtual machine memory by byte integer"],["hsv_d","Stores virtual machine memory by double integer"],["hsv_h","Stores virtual machine memory by half integer"],["hsv_w","Stores virtual machine memory by word integer"],["kabs16","Compute the absolute value of packed 16-bit signed integers"],["kabs8","Compute the absolute value of packed 8-bit signed integers"],["kadd16","Adds packed 16-bit signed numbers, saturating at the numeric bounds"],["kadd8","Adds packed 8-bit signed numbers, saturating at the numeric bounds"],["kaddh","Adds signed lower 16-bit content of two registers with Q15 saturation"],["kcras16","Cross adds and subtracts packed 16-bit signed numbers, saturating at the numeric bounds"],["kcrsa16","Cross subtracts and adds packed 16-bit signed numbers, saturating at the numeric bounds"],["ksll16","Logical left shift packed 16-bit elements, saturating at the numeric bounds"],["ksll8","Logical left shift packed 8-bit elements, saturating at the numeric bounds"],["kslra16","Logical saturating left then arithmetic right shift packed 16-bit elements"],["kslra16u","Logical saturating left then arithmetic right shift packed 16-bit elements"],["kslra8","Logical saturating left then arithmetic right shift packed 8-bit elements"],["kslra8u","Logical saturating left then arithmetic right shift packed 8-bit elements"],["kstas16","Straight adds and subtracts packed 16-bit signed numbers, saturating at the numeric bounds"],["kstsa16","Straight subtracts and adds packed 16-bit signed numbers, saturating at the numeric bounds"],["ksub16","Subtracts packed 16-bit signed numbers, saturating at the numeric bounds"],["ksub8","Subtracts packed 8-bit signed numbers, saturating at the numeric bounds"],["ksubh","Subtracts signed lower 16-bit content of two registers with Q15 saturation"],["nop","Generates the `NOP` instruction"],["pause","Generates the `PAUSE` instruction"],["pbsad","Calculate the sum of absolute difference of unsigned 8-bit data elements"],["pbsada","Calculate and accumulate the sum of absolute difference of unsigned 8-bit data elements"],["pkbt16","Pack two 16-bit data from bottom and top half from 32-bit chunks"],["pktb16","Pack two 16-bit data from top and bottom half from 32-bit chunks"],["radd16","Halves the sum of packed 16-bit signed numbers, dropping least bits"],["radd8","Halves the sum of packed 8-bit signed numbers, dropping least bits"],["rcras16","Cross halves of adds and subtracts packed 16-bit signed numbers, dropping least bits"],["rcrsa16","Cross halves of subtracts and adds packed 16-bit signed numbers, dropping least bits"],["rstas16","Straight halves of adds and subtracts packed 16-bit signed numbers, dropping least bits"],["rstsa16","Straight halves of subtracts and adds packed 16-bit signed numbers, dropping least bits"],["rsub16","Halves the subtraction result of packed 16-bit signed numbers, dropping least bits"],["rsub8","Halves the subtraction result of packed 8-bit signed numbers, dropping least bits"],["scmple16","Compare whether 16-bit packed signed integers are less than or equal to the others"],["scmple8","Compare whether 8-bit packed signed integers are less than or equal to the others"],["scmplt16","Compare whether 16-bit packed signed integers are less than the others"],["scmplt8","Compare whether 8-bit packed signed integers are less than the others"],["sfence_inval_ir","Generates the `SFENCE.INVAL.IR` instruction"],["sfence_vma","Supervisor memory management fence for given virtual address and address space"],["sfence_vma_all","Supervisor memory management fence for all address spaces and virtual addresses"],["sfence_vma_asid","Supervisor memory management fence for given address space"],["sfence_vma_vaddr","Supervisor memory management fence for given virtual address"],["sfence_w_inval","Generates the `SFENCE.W.INVAL` instruction"],["sinval_vma","Invalidate supervisor translation cache for given virtual address and address space"],["sinval_vma_all","Invalidate supervisor translation cache for all address spaces and virtual addresses"],["sinval_vma_asid","Invalidate supervisor translation cache for given address space"],["sinval_vma_vaddr","Invalidate supervisor translation cache for given virtual address"],["sll16","Logical left shift packed 16-bit elements, discarding overflow bits"],["sll8","Logical left shift packed 8-bit elements, discarding overflow bits"],["sm3p0","`P0` transformation function as is used in the SM3 hash algorithm"],["sm3p1","`P1` transformation function as is used in the SM3 hash algorithm"],["sm4ed","Accelerates the round function `F` in the SM4 block cipher algorithm"],["sm4ks","Accelerates the key schedule operation in the SM4 block cipher algorithm"],["smaqa","Multiply signed 8-bit elements and add 16-bit elements on results for packed 32-bit chunks"],["smaqasu","Multiply signed to unsigned 8-bit and add 16-bit elements on results for packed 32-bit chunks"],["smax16","Get maximum values from 16-bit packed signed integers"],["smax8","Get maximum values from 8-bit packed signed integers"],["smin16","Get minimum values from 16-bit packed signed integers"],["smin8","Get minimum values from 8-bit packed signed integers"],["sra16","Arithmetic right shift packed 16-bit elements without rounding up"],["sra16u","Arithmetic right shift packed 16-bit elements with rounding up"],["sra8","Arithmetic right shift packed 8-bit elements without rounding up"],["sra8u","Arithmetic right shift packed 8-bit elements with rounding up"],["srl16","Logical right shift packed 16-bit elements without rounding up"],["srl16u","Logical right shift packed 16-bit elements with rounding up"],["srl8","Logical right shift packed 8-bit elements without rounding up"],["srl8u","Logical right shift packed 8-bit elements with rounding up"],["stas16","Straight adds and subtracts packed 16-bit signed numbers, discarding overflow bits"],["stsa16","Straight subtracts and adds packed 16-bit signed numbers, discarding overflow bits"],["sub16","Subtracts packed 16-bit signed numbers, discarding overflow bits"],["sub8","Subtracts packed 8-bit signed numbers, discarding overflow bits"],["sunpkd810","Unpack first and zeroth into two 16-bit signed halfwords in each 32-bit chunk"],["sunpkd820","Unpack second and zeroth into two 16-bit signed halfwords in each 32-bit chunk"],["sunpkd830","Unpack third and zeroth into two 16-bit signed halfwords in each 32-bit chunk"],["sunpkd831","Unpack third and first into two 16-bit signed halfwords in each 32-bit chunk"],["sunpkd832","Unpack third and second into two 16-bit signed halfwords in each 32-bit chunk"],["swap16","Swap the 16-bit halfwords within each 32-bit word of a register"],["swap8","Swap the 8-bit bytes within each 16-bit halfword of a register."],["ucmple16","Compare whether 16-bit packed unsigned integers are less than or equal to the others"],["ucmple8","Compare whether 8-bit packed unsigned integers are less than or equal to the others"],["ucmplt16","Compare whether 16-bit packed unsigned integers are less than the others"],["ucmplt8","Compare whether 8-bit packed unsigned integers are less than the others"],["ukadd16","Adds packed 16-bit unsigned numbers, saturating at the numeric bounds"],["ukadd8","Adds packed 8-bit unsigned numbers, saturating at the numeric bounds"],["ukaddh","Adds signed lower 16-bit content of two registers with U16 saturation"],["ukcras16","Cross adds and subtracts packed 16-bit unsigned numbers, saturating at the numeric bounds"],["ukcrsa16","Cross subtracts and adds packed 16-bit unsigned numbers, saturating at the numeric bounds"],["ukstas16","Straight adds and subtracts packed 16-bit unsigned numbers, saturating at the numeric bounds"],["ukstsa16","Straight subtracts and adds packed 16-bit unsigned numbers, saturating at the numeric bounds"],["uksub16","Subtracts packed 16-bit unsigned numbers, saturating at the numeric bounds"],["uksub8","Subtracts packed 8-bit unsigned numbers, saturating at the numeric bounds"],["uksubh","Subtracts signed lower 16-bit content of two registers with U16 saturation"],["umaqa","Multiply unsigned 8-bit elements and add 16-bit elements on results for packed 32-bit chunks"],["umax16","Get maximum values from 16-bit packed unsigned integers"],["umax8","Get maximum values from 8-bit packed unsigned integers"],["umin16","Get minimum values from 16-bit packed unsigned integers"],["umin8","Get minimum values from 8-bit packed unsigned integers"],["uradd16","Halves the sum of packed 16-bit unsigned numbers, dropping least bits"],["uradd8","Halves the sum of packed 8-bit unsigned numbers, dropping least bits"],["urcras16","Cross halves of adds and subtracts packed 16-bit unsigned numbers, dropping least bits"],["urcrsa16","Cross halves of subtracts and adds packed 16-bit unsigned numbers, dropping least bits"],["urstas16","Straight halves of adds and subtracts packed 16-bit unsigned numbers, dropping least bits"],["urstsa16","Straight halves of subtracts and adds packed 16-bit unsigned numbers, dropping least bits"],["ursub16","Halves the subtraction result of packed 16-bit unsigned numbers, dropping least bits"],["ursub8","Halves the subtraction result of packed 8-bit unsigned numbers, dropping least bits"],["wfi","Generates the `WFI` instruction"],["zunpkd810","Unpack first and zeroth into two 16-bit unsigned halfwords in each 32-bit chunk"],["zunpkd820","Unpack second and zeroth into two 16-bit unsigned halfwords in each 32-bit chunk"],["zunpkd830","Unpack third and zeroth into two 16-bit unsigned halfwords in each 32-bit chunk"],["zunpkd831","Unpack third and first into two 16-bit unsigned halfwords in each 32-bit chunk"],["zunpkd832","Unpack third and second into two 16-bit unsigned halfwords in each 32-bit chunk"]]};