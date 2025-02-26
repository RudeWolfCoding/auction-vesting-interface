import React, { useCallback, useEffect } from 'react'
import { Text } from 'rebass'
import { useNavigate } from 'react-router-dom'
import Row from './Row'
import { ButtonGradient } from './Button'
import VoltIcon from '../../../assets/images/volt.svg'
import { useTotalClaim } from '../../../hooks/useVesting'
import { useWeb3Context } from '../../../context/web3'
// import { useVestingClaimableIds, useVestingTotalUnclaimedAmounts } from '../../../hooks/useVesting'
// import { useVestingContract } from '../../../hooks/useContract'


export default function ClaimVestingTableRow({ vestingAddress, name, isPrivate }) {
  const navigate = useNavigate()
  const totalClaim = useTotalClaim(vestingAddress)

  return (
    <Row
      padding={'11px 12px 11px 15px'}
      color={'white'}
      backgroundColor={'black'}
      justifyContent={'space-between'}
      borderRadius={'12px'}
      marginBottom={'5px'}
    >
      <Text>{name}</Text>
      <Text display={'flex'} alignItems={'center'} marginLeft={'20px'}>
        <img src={VoltIcon} alt="" style={{ width: '25px', paddingBottom: '-8px', margin: 'auto' }} />
        {totalClaim.shiftedBy(-18).decimalPlaces(4).toString()}
      </Text>
        <ButtonGradient
          width={'67px'}
          height={'32px'}
          padding={'0px'}
          onClick={() => {{isPrivate ? navigate(`/private/${vestingAddress}`) : navigate(`/unvest/${vestingAddress}`)}}}
        >
          Claim {isPrivate}
        </ButtonGradient>
    </Row>
  )
}