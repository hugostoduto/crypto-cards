import P from 'prop-types';
import * as Styled from './styles';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
export const SelectCrypto = ({ coinData, coinId }) => {
  const items = coinData?.map((coin) => ({
    key: coin.uuid,
    label: (
      <a onClick={() => coin.uuid} value={coin.uuid}>
        {coin.name}
      </a>
    ),
  }));

  return (
    <Styled.Container>
      <div>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="selectCrypto-title">
              <h4>Coins</h4>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Styled.Container>
  );
};

SelectCrypto.propTypes = {
  coinData: P.node.isRequired,
};
