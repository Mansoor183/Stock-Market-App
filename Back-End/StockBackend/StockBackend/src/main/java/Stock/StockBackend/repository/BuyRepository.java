package Stock.StockBackend.repository;

import Stock.StockBackend.model.Buy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BuyRepository extends JpaRepository<Buy, Long> {
    Optional<Buy> findByStockSymbol(String stockSymbol);
}
