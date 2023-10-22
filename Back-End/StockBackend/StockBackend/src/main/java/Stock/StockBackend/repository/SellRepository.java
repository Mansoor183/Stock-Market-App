package Stock.StockBackend.repository;

import Stock.StockBackend.model.Sell;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SellRepository extends JpaRepository<Sell, Long> {


}
