//style imports
import * as Style from '../tokenomics/tokenomics.style';

//apexchart imports
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { theme } from '../../../themes/theme';

const options: ApexOptions = {
	chart: {
		type: 'radialBar',
		offsetY: -40,
		sparkline: {
			enabled: false,
		},
	},
	plotOptions: {
		radialBar: {
			startAngle: -90,
			endAngle: 90,
			track: {
				background: [
					'#ff34d618',
					'#8c07b81d',
					'#f9a14326',
					'#4cfe462b',
					'#88d1a232',
					'#6669ce30',
					'#9aeb0224',
					'#7ec7e734',
					'#7e74ee2f',
				],
				strokeWidth: '97%',
			},
			hollow: {
				size: '1%',
			},
			dataLabels: {
				name: {
					offsetY: -20,
					show: true,
				},
				value: {
					offsetY: -10,
					fontSize: '20px',
				},
			},
		},
	},
	grid: {
		padding: {
			top: -10,
		},
	},
	stroke: {
		lineCap: 'round',
	},
	colors: [
		theme.colors.graphicTheme.graphicLine01,
		theme.colors.graphicTheme.graphicLine02,
		theme.colors.graphicTheme.graphicLine03,
		theme.colors.graphicTheme.graphicLine04,
		theme.colors.graphicTheme.graphicLine05,
		theme.colors.graphicTheme.graphicLine06,
		theme.colors.graphicTheme.graphicLine07,
		theme.colors.graphicTheme.graphicLine08,
		theme.colors.graphicTheme.graphicLine09,
	],
	labels: [
		'PLAY TO EARN REWARDS',
		'DEVELOPER VESTING',
		'CEX LISTING RESERVES',
		'ADVISOR VESTING',
		'MARKETING',
		'STAKING PLATFORM',
		'FAIR LAUNCH PINKSALE',
		'LIQUIDITY POOL',
		'AIRDROP CAMPAIGNS',
	],
};

const Tokenomics = () => {
	return (
		<Style.Container>
			<Style.Content>
				<h1>TOKENOMICS</h1>
				<Chart options={options} series={[85, 5, 5, 1.3, 1, 1, 1, 0.6, 0.1]} type='radialBar' />
				<Style.Legends>
					<li>
						<span className='line-01' />
						PLAY TO EARN REWARDS
					</li>
					<li>
						<span className='line-02' />
						DEVELOPER VESTING
					</li>
					<li>
						<span className='line-03' />
						CEX LISTING RESERVES
					</li>
					<li>
						<span className='line-04' />
						ADVISOR VESTING
					</li>
					<li>
						<span className='line-05' />
						MARKETING
					</li>
					<li>
						<span className='line-06' />
						STAKING PLATFORM
					</li>
					<li>
						<span className='line-07' />
						FAIR LAUNCH PINKSALE
					</li>
					<li>
						<span className='line-08' />
						LIQUIDITY POOL
					</li>
					<li>
						<span className='line-09' />
						AIRDROP CAMPAIGNS
					</li>
				</Style.Legends>
			</Style.Content>
		</Style.Container>
	);
};

export default Tokenomics;
